import React from 'react';
import ShareCarrotManager from '../../components/manager/share.carrot.manager.container';
import ContainerContent from '../../components/container/container.component';

const ShareCarrotPage = () => {
  return (
    <div className="">
        <ContainerContent title="MANAGER LIST">
          <div className="row mt-3">
              <ShareCarrotManager />
              {/* <Pagination {...props.pagination} /> component pagination ada perubahaan cara makenya, jadi tak comment*/}
          </div>
        </ContainerContent>
    </div>
  )
}

export default ShareCarrotPage