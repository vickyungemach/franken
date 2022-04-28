import React, { useState, useEffect } from 'react';
import Input from '../elements/Input';
import AddButton from 'components/common/modelForm/AddButton';
import AddMembers from './AddMembers';
import Members from './Members';

const CreateGroup = ({ addMemberInput, setAddMemberInput, createGroup }) => {
    const [name, setName] = useState('');
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        if (createGroup) {
            setName('');
            setSelected([]);
            setAddMemberInput(false);
        }
    }, [createGroup]) // eslint-disable-line

    return (
        <div className='group__create'>
            <div className="group__create-image"> Add cover photo</div>
            <Input onClick={() => setAddMemberInput(false)} value={name} setValue={setName} placeholder="Group name" />
            {

                addMemberInput ? <AddMembers selected={selected} setSelected={setSelected} closeAddMemberForm={() => setAddMemberInput(false)} />
                    : <AddButton title="Add members" onClick={() => setAddMemberInput(true)} />
            }
            <Members selected={selected} setSelected={setSelected} />

            <div className='group__create-submit regular-btn'>
                <p>Done</p>
            </div>
        </div>
    )
}




export default CreateGroup

