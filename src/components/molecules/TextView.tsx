import React, { FC } from 'react';
import { IWidgetCountBySeverity } from '../../models/WidgetData';
import { Text, TextType } from '../atoms';
import { Theme, makeStyles, Avatar } from '@material-ui/core';
import roadNumberIcon from '../../assets/640px-ISR-HW-90.svg.png';
import { highlightBasicColor, highlightDarkColor, highlightAlertColor, highlightWarnColor } from '../../style/_globals';

interface IProps {
  data: IWidgetCountBySeverity[];
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-evenly',
    padding: '5px',
    borderRadius: '10px',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(5),
  },
  mainText: {
    padding: '5px',
    backgroundColor: highlightBasicColor,
  },
  bottomText: {
    fontSize: 24,
    padding: '5px 0 5px 5px',
    backgroundColor: highlightBasicColor,
  },
  highlightDark: {
    padding: '5px',
    color: highlightBasicColor,
    backgroundColor: highlightDarkColor,
  },
  highlightAlert: {
    padding: '5px',
    backgroundColor: highlightAlertColor,
  },
  highlightWarn: {
    padding: '5px',
    backgroundColor: highlightWarnColor,
  },
}));
const TextView: FC<IProps> = (props) => {
  //hardcoded, waiting for data changes from the server
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar variant="square" alt="Road Number" src={roadNumberIcon} className={classes.large} />
      <Text type={TextType.WIDGET_TITLE}>
        <span className={classes.mainText}>
          <span>
            בין השנים {'2015-2019'} במקטע מצפה שלם - צומת שדי שבכביש {'90'} התרחשו
          </span>
          <span className={classes.highlightDark}>266</span>
          <span>תאונות</span>
        </span>
      </Text>
      <div>
        <Text type={TextType.WIDGET_CONTENT}>
          <span className={classes.bottomText}>
            <span className={classes.highlightAlert}>13</span>
            <span>קטלניות</span>
          </span>
        </Text>
        <Text type={TextType.WIDGET_CONTENT}>
          <span className={classes.bottomText}>
            <span className={classes.highlightWarn}>16</span>
            <span>קשות</span>
          </span>
        </Text>
        <Text type={TextType.WIDGET_CONTENT}>
          <span className={classes.bottomText}>ו- 255 קלות</span>
        </Text>
      </div>
    </div>
  );
};
export default TextView;
