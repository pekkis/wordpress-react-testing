import React from 'react';
import wp from './wp/wp';
import Youtube from 'react-youtube';

const Presentations = props => {

  const { data } = props;

  console.log(data);

  return (
    <div>
      {data.map(p => {
        return (
          <div key={p.id}>
            <h2>{p.title.rendered}</h2>
            <Youtube videoId={p.acf.youtube_video_id} />
          </div>
        )

      })}
    </div>
  );
};

export default wp(
  api => api.presentations().perPage(3)
)(Presentations);
