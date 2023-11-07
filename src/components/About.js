import React from 'react';
import Links from './Links'; 
import user from '../data/user';

function About({bio}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.trim() !== '' && <p>{bio}</p>}
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default About;
