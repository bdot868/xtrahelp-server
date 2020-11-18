import React from 'react';
import { Segment, Header, Icon, Button } from 'semantic-ui-react';
import Upload from './Upload'


const AddPhoto = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name='pdf file outline' />
        No documents are listed for this customer.
      </Header>
      <Button primary>Add Document</Button>
      <Upload />
    </Segment>
  )
}

export default AddPhoto;
