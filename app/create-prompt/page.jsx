"use client";

import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Form from '@components/Form'


const CreatePrompt = () => {
    const [submitting, setSubmittng] = useState(false);

    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmittng(true);
        try {
            const reponse = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })
            if (Response.ok) {
                Router.push('/');
            }

        } catch (error) {
            console.log(error);
        } finally {
            setSubmittng(false);
        }
    }


    return (
        <Form
            type='Create'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}
        />



    )
}

export default CreatePrompt
