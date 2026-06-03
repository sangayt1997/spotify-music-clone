import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreatePlaylistContainer,
  PageHeader,
  CreateForm,
  FormGroup,
  SubmitButton,
  CancelButton
} from "./styles/create-playlist.style";

const CreatePlaylist: React.FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would create the playlist via API
        console.log('Creating playlist:', { name, description });
        navigate('/your-library');
    };

    return (
        <CreatePlaylistContainer>
            <PageHeader>
                <h1>Create Playlist</h1>
            </PageHeader>

            <CreateForm onSubmit={handleSubmit}>
                <FormGroup>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Give your playlist a name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        placeholder="Add an optional description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FormGroup>

                <div>
                    <SubmitButton type="submit" disabled={!name.trim()}>
                        Create
                    </SubmitButton>
                    <CancelButton type="button" onClick={() => navigate(-1)}>
                        Cancel
                    </CancelButton>
                </div>
            </CreateForm>
        </CreatePlaylistContainer>
    );
}

export default CreatePlaylist;
