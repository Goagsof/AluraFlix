import React, { createContext, useState } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([
    {
      title: 'EDM Playlist 01',
      category: 'Musica',
      thumbnail: 'https://badgatostudios.com/wp-content/uploads/2024/02/musica-electronica-4.jpg',
      videoUrl: 'https://youtu.be/HlSAeGV41_k?si=wrJ6I_JkToAvSO2d',
      description: 'Musica Electronica',
    },
    {
      title: 'Nightcore Songs Mix 2024',
      category: 'Musica',
      thumbnail: 'https://kgnu-org.sfo3.digitaloceanspaces.com/wp-content/uploads/2023/12/21104020/electronicmusic.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=0Y5kKMAkKjc',
      description: 'Musica Electronica',
    },
    {
      title: 'NEFFEX ',
      category: 'Musica',
      thumbnail: 'https://e0.pxfuel.com/wallpapers/430/404/desktop-wallpaper-neffex.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=_5vZoei88Bw',
      description: 'Musica Electronica',
    },
    {
      title: 'Franco Escamilla',
      category: 'Comedia',
      thumbnail: 'https://www.crhoy.com/wp-content/uploads/2022/07/Franco-Escamilla.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=8AiulsAi_bM&ab_channel=FrancoEscamilla',
      description: 'Video de Comedia',
    },
    {
      title: 'Probando los REFRESCOS mas RAROS',
      category: 'Comedia',
      thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a319fe7-7a5d-45fb-9d12-7e51910c4fa8/deieg07-1e62ecaa-9b44-4887-9d33-3cb675adf7e1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhMzE5ZmU3LTdhNWQtNDVmYi05ZDEyLTdlNTE5MTBjNGZhOFwvZGVpZWcwNy0xZTYyZWNhYS05YjQ0LTQ4ODctOWQzMy0zY2I2NzVhZGY3ZTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WubpQtDB8hktC4KSvbq2BjIJrN1MIvXBFMNTTL3kTqM',
      videoUrl: 'https://www.youtube.com/watch?v=x4ERq330Hdw&ab_channel=MissaSinfonia',
      description: 'MissaSinfonia',
    },
    {
      title: 'Indirectas | Hola Soy German',
      category: 'Comedia',
      thumbnail: 'https://i.ytimg.com/vi/URb2LdY8GTw/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=0MZ774hfLuU&ab_channel=HolaSoyGerman.',
      description: 'HolaSoyGerman',
    },
    {
      title: 'Samsung Galaxy Watch Ultra',
      category: 'Tecnologia',
      thumbnail: 'https://static-cdn.jtvnw.net/jtv_user_pictures/0dc8ea9c-4981-41d3-a831-6d9dd2bdad89-profile_banner-480.png',
      videoUrl: 'https://www.youtube.com/watch?v=7tvXysEXd_c&ab_channel=IsaMarcial',
      description: 'Isa Marcial',
    },
    {
      title: 'Realme GT6T REVIEW',
      category: 'Tecnologia',
      thumbnail: 'https://topesdegama.com/app/themes/gaz-v1/dist/sites/topesdegama.com/images/logo-social-share.jpeg?25042023',
      videoUrl: 'https://www.youtube.com/watch?v=5RTi37Tv6wQ&ab_channel=TopesdeGama',
      description: 'Topes de Gama',
    },
    {
      title: 'Huawei Pura 70 Ultra',
      category: 'Tecnologia',
      thumbnail: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/127582720_216100946539858_5404764431953212813_n.jpg?stp=dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=2a1932&_nc_ohc=MXmAFcnMpOQQ7kNvgFEXIaT&_nc_ht=scontent-mia3-1.xx&oh=00_AYAZr2_bBbS0kNyIN4LsmS6FIh2VV07rqvDt5niLfz3hvA&oe=66B62965',
      videoUrl: 'https://www.youtube.com/watch?v=CNvSxOjD86o&ab_channel=Tecnonauta',
      description: 'Tecnonauta',
    },

  ]);

  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  const deleteVideo = (videoTitle) => {
    const updatedVideos = videos.filter(video => video.title !== videoTitle);
    setVideos(updatedVideos);
  };

  const editVideo = (editedVideo) => {
    const updatedVideos = videos.map(video =>
      video.title === editedVideo.title ? editedVideo : video
    );
    setVideos(updatedVideos);
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo, deleteVideo, editVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
