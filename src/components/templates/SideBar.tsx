import React, { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import News from '../organisms/News';
import { NewsFlashFilterPanel } from '../molecules/NewsFlashFilterPanel';
import LocationMap from '../molecules/LocationMap';
import { borderColor } from '../../style/_globals';
import { Text, TextType, ErrorBoundary } from '../atoms';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/storeConfig';
import RootStore from '../../store/root.store';

interface IProps {}

const useStyles = makeStyles({
  newsContainer: {
    overflow: 'auto',
  },
});

const SideBar: FC<IProps> = () => {
  const store: RootStore = useStore();
  const classes = useStyles();
  const mapTitle = 'מיקום משוער:';
  const location = store.activeNewsFlashLocation;

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="stretch">
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        className={classes.newsContainer}
        border={1}
        borderColor={borderColor}
      >
        <ErrorBoundary>
          <NewsFlashFilterPanel />
        </ErrorBoundary>
        <News />
      </Box>
      <Box flexShrink={0} flexGrow={0} p={1}>
        <Text type={TextType.CONTENT_TITLE} children={mapTitle} />
      </Box>
      <Box flexBasis={300} flexShrink={0} px={1} pb={1}>
        <ErrorBoundary>
          <LocationMap data={[location]} />
        </ErrorBoundary>
      </Box>
    </Box>
  );
};

export default observer(SideBar);
