import Typography from '@components/Typography';
import VideoPlayer from '@components/VideoPlayer';
import React, {useEffect, useMemo, useRef} from 'react';
import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';
import Video from 'react-native-video';

interface Props {}

const index = ({navigation: {setOptions}}: Props) => {
  return (
    <View style={{flex: 1}}>
      <VideoPlayer setOptions={setOptions} />
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non maiores
        quia quae, at beatae voluptatibus fugiat aperiam odio saepe itaque esse
        rerum sint tempora. Quisquam facere, cumque, repellendus delectus
        assumenda nulla, iste dolorum veniam eaque sit inventore in labore
        laborum soluta est! Enim quos molestiae voluptate maiores provident
        laudantium numquam quo esse natus, veniam minus beatae deserunt quia
        illum obcaecati ex cupiditate voluptates officiis? Ad velit dicta eos
        ratione quos impedit ex reiciendis ducimus, sunt nemo iusto, cumque
        tenetur. Debitis commodi at dignissimos quia sunt minus earum optio
        error rem sequi. Sint velit aut molestias minus, reprehenderit tempora
        voluptatem eum.
      </Typography>
    </View>
  );
};

export default index;
