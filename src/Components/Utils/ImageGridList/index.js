import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { OverLay } from '../OverLay'
import image1 from '../../../assest/images/no_1.jpg'
import image2 from '../../../assest/images/no_2.jpg'
import image3 from '../../../assest/images/no_3.jpg'
import image4 from '../../../assest/images/no_4.jpg'
import image5 from '../../../assest/images/no_5.jpg'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        padding: theme.spacing.unit,
        width: '100vw',
    },
    subheader: {
        width: '100%',
    },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const images = [
    {
        img: image1,
        title: 'Image 1',
        author: 'author',
        cols: 2,
    },
    {
        img: image2,
        title: 'Image 2',
        author: 'author',
        cols: 1,
    },
    {
        img: image3,
        title: 'Image 3',
        author: 'author',
        cols: 1,
    },
    {
        img: image4,
        title: 'Image 4',
        author: 'author',
        cols: 1,
    },
    {
        img: image5,
        title: 'Image 5',
        author: 'author',
        cols: 1,
    },
]
function ImageGridList(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {images.map((tile, index) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        {
                            index < images.length - 1 && <img src={tile.img} alt={tile.title} />
                        }
                        {
                            index === images.length - 1 && <React.Fragment>
                                <img src={tile.img} alt={tile.title} />
                                <OverLay text="More 99+"/>
                            </React.Fragment>
                        }
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);