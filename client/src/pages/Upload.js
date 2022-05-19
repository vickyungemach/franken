import React from 'react';
import { connect } from 'react-redux'
import { uploadImage } from 'actions/images'

const Upload = ({ uploadImage }) => {

    const handleUpload = (e) => {
        uploadImage(e.target.files[0])
    }

    return (
        <div>
            <input type="file" multiple onChange={handleUpload} />
            <button>
                Upload!
            </button>
        </div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { uploadImage })(Upload);