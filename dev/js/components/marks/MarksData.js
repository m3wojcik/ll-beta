import React, { Component } from 'react';
import {AreaChart} from 'react-easy-chart';
import FontIcon from 'react-md/lib/FontIcons';
import Tabs from 'react-md/lib/Tabs/Tabs';
import Tab from 'react-md/lib/Tabs/Tab';
import TabsContainer from 'react-md/lib/Tabs/TabsContainer';
import {getShortMonth} from '../../actions/Functions';
import ProgressBar from '../helpers/ProgressBar'
import AreaChartWrapper from '../helpers/AreaChartWrapper'
import ChartContainer from '../helpers/ChartContainer';
import BoxTitle from '../helpers/BoxTitle';
import MarksList from './MarksList'
import MarksClassAverageContainer from '../../containers/marks/MarksClassAverageContainer'

export default class MarksData extends Component {

  render(){
    const { marks, gradeType, groupId } = this.props;
    let useWeight = false, progressTitle, progressBarProps, progressBarTitle, marksInTime = [], averageInTime = [], weightedAverageInTime = [];
    var percent = 0, average = 0, averageNom = 0, weightedAverageNom = 0, weightedAverage = 0, weightedAverageWeights = 0, range;
    const marksLength = marks.length;

    marks.reverse();
    marks.forEach(function(mark,i){
      //Check if they use mark weight
      if(mark.weight != 1) useWeight = true;

      //Calculate average
      averageNom += Number(mark.value);
      average = averageNom / (i + 1);

      //Calculate weighted average
      weightedAverageNom = weightedAverageNom + Number(mark.value) * mark.weight;
      weightedAverageWeights += mark.weight;
      weightedAverage = weightedAverageNom / weightedAverageWeights;

      //Prepare date format
      const markDate = new Date(mark.date);
      const shortYear = Number(markDate.getFullYear()) - 2000
      const markDateString = markDate.getDate()+"-"+getShortMonth(markDate.getMonth())+"-"+shortYear

      //Push values into data tables
      marksInTime.push({x: i, y: mark.value, label: markDateString})
      averageInTime.push({x: i, y: average.toFixed(2), label: markDateString})
      weightedAverageInTime.push({x: i, y: weightedAverage.toFixed(2), label: markDateString})
    })
    if(gradeType=="percent"){
      if(useWeight) percent = weightedAverage
      else percent = average
      range = [0,100]
      progressTitle = "Average percent result"
      progressBarProps = {
        title: percent.toFixed() + "%",
        value: percent
      }
    }else{
      if(useWeight) {
        percent = (weightedAverage / 6) * 100;
        progressBarTitle = weightedAverage;
      }else {
        percent = (average / 6) * 100;
        progressBarTitle = average;
      }
      range = [0,6]
      progressTitle = "Average result"
      progressBarProps = {
        title: progressBarTitle,
        value: percent
      }
    }

    return(
      <div>
        <BoxTitle
          title={progressTitle}
          titleIcon={<FontIcon className="icon-teal">equalizer</FontIcon>}
        />
        <ProgressBar {...progressBarProps} />

        <BoxTitle
          title="Marks"
          titleIcon={<FontIcon className="icon-teal">dns</FontIcon>}
        />
        <MarksList gradeType={gradeType} marks={marks.reverse()} />
        <BoxTitle
          title="Statistics"
          titleIcon={<FontIcon className="icon-teal">timeline</FontIcon>}
        />
        <MarksClassAverageContainer groupId={groupId} title="Averages in class" />
        <TabsContainer panelClassName="md-grid" >
          <Tabs tabId="tab">
            <Tab label="Average in time">
              <div className="md-cell md-cell--12">
                <ChartContainer>
                  <AreaChartWrapper
                    labelsData={averageInTime}
                    label
                    axes
                    areaColors={['#2185D0']}
                    noAreaGradient
                    yDomainRange={range}
                    dataPoints
                    interpolate={'cardinal'}
                    height={250}
                    data={[weightedAverageInTime]}
                    margin={{top: 5, right: 5, bottom: 5, left: 35}}
                  />
                </ChartContainer>
              </div>
            </Tab>
            <Tab label="Marks in time">
              <div className="md-cell md-cell--12">
                <ChartContainer >
                  <AreaChartWrapper
                    labelsData={marksInTime}
                    label
                    axes
                    areaColors={['#FBBD08']}
                    noAreaGradient
                    yDomainRange={range}
                    dataPoints
                    interpolate={'cardinal'}
                    height={250}
                    data={[marksInTime]}
                    margin={{top: 5, right: 5, bottom: 5, left: 35}}
                  />
                </ChartContainer>
              </div>
            </Tab>
          </Tabs>
        </TabsContainer>


      </div>
    )
  }
}
