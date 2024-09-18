import {useState} from "react";

interface Props {
content: string;
title: string;
isSponsored: boolean;
author: string;
}

export const Article = ({content, title,author, isSponsored}: Props) => {
    const [showAuthor, setShowAuthor] = useState(false);

    const handleClick = (): void => {
        setShowAuthor(true)
    }

    return <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: content}}/>
        {isSponsored ? <p>Sponsored article</p> : null}
        {showAuthor ? <p>Author: {author}</p> : <button onClick={handleClick}>Show author</button>}
    </div>
}