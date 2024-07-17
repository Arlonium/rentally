'use client';
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CreateSocietyDialog = ({ userId, onCreate }: any) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setError('');
    };

    return (
        <Dialog>
            <DialogTrigger>
                <Button>Create Society</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a new Society</DialogTitle>
                    <DialogDescription>
                        Fill in the details to create a new society.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <Input
                            placeholder="Society Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="flex justify-end">
                        <Button type="submit" disabled={loading}>
                            {loading ? 'Creating...' : 'Create'}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateSocietyDialog;
