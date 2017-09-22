import React from 'react';
import CustomListItem from '../helpers/CustomListItem';
import WallNotificationHeader from './WallNotificationHeader';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';

const MarkWall = ({mark}) =>{
    return(
      <CustomListItem

        header={<WallNotificationHeader notification={mark} />}
        primaryText={mark.extra_data.value+" "+mark.extra_data.column}
        secondaryText={mark.extra_data.teacher}

    />
    )
}
MarkWall.propTypes = {
  mark: React.PropTypes.object.isRequired
}
export default MarkWall