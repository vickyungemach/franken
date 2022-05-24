import React from 'react';
import { connect } from 'react-redux'
import { uploadImages } from 'actions/images'

const Upload = ({ uploadImages }) => {

    const handleUpload = (e) => {
        uploadImages(e.target.files[0])
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

export default connect(mapStateToProps, { uploadImages })(Upload);