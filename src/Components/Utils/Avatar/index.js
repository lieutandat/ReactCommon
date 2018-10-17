import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import avataIcon from '../../../assest/images/no_1.jpg'

const styles = {
    bigAvatar: {
        width: 60,
        height: 60,
    },
};


const ImageAvatars = (props) => {
    const { classes, src = avataIcon } = props;
    return (
        <Avatar
            // srcset="image-320w.jpg 320w,
            // image-480w.jpg 480w,
            // image-800w.jpg 800w"
            // sizes="(max-width: 320px) 300px,
            // (max-width: 480px) 440px,
            // 800px"
            alt="Adelle Charles"
            src= {src}
            className={classNames(classes.bigAvatar)}
        />
    );
}

const ImageAvatarProps = withStyles(styles)(ImageAvatars);

export const  ImageAvatar =  ({ classes, src }) => <ImageAvatarProps classes={classes} src={src}/>
