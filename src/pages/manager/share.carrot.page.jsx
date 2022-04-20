import ShareCarrotManager from '../../components/manager/share.carrot.manager.container';
import ContainerContent from '../../components/container/container.component';
import React from "react";

const ShareCarrotPage = (props) => {
    return (
        <div className="">
            <ContainerContent title="MANAGER LIST">
                <div className="row mt-3">
                    <ShareCarrotManager />
                    {/* <Pagination {...props.pagination} /> component pagination ada perubahaan cara makenya, jadi tak comment*/}
                </div>
            </ContainerContent>
        </div>
    );
};

export default ShareCarrotPage;