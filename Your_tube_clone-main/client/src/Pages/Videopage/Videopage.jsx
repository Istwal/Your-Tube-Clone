import React, { useEffect } from 'react'
// ...
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { viewvideo } from '../../action/video'
import { addtohistory } from '../../action/history'
import { getallcomment } from '../../action/comment' // instead of getcomments

const Videopage = () => {
    const { vid } = useParams();
    const dispatch = useDispatch();
    const vids = useSelector((state) => state.videoreducer);
    const currentuser = useSelector(state => state.currentuserreducer);
    const allComments = useSelector(state => state.commentreducer?.data);

    const vv = vids?.data?.find((q) => q._id === vid);

    useEffect(() => {
        if (currentuser) {
            dispatch(addtohistory({
                videoid: vid,
                viewer: currentuser?.result._id,
            }));
        }
        dispatch(viewvideo({ id: vid }));
        dispatch(getallcomment()); // ✅ Original
    }, [dispatch, vid, currentuser]);

    return (
        <div className="comments_VideoPage">
            <Comment videoid={vv?._id} />
            {allComments && allComments
                .filter(c => c.videoid === vid)
                .map((c) => (
                    <Displaycommment
                        key={c._id}
                        cid={c._id}
                        commentbody={c.commentbody}
                        userid={c.userid}
                        commenton={c.commenton}
                        usercommented={c.usercommented}
                    />
                ))}
        </div>
    );
};

export default Videopage
