import React from 'react';
import { Icon, Button } from 'semantic-ui-react';


const Dropzone = () => {
  return (
    <div>
      <Button basic icon>
        <Icon name="cloud upload" size="massive"/>
      </Button>
      <input type="file"/>
    </div>
  )
}

export default Dropzone;
