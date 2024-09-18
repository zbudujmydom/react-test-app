import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Article} from "./Article";

// You should bump the installed version of @testing-library/react to at least 15.0.6 to get rid of the deprecation warning.



    const defaultContent = `
 <p>abc</p>
 <a href="www.google.com">Google link</a>
`

describe('Article component', () => {
    it('should show title correctly', () => {
        render(<Article content={defaultContent} title="article title" isSponsored={false} author="John"/>);

        expect(screen.getByText('article title')).toBeInTheDocument()
    });

    it('should render sponsored info', () => {
        render(<Article content={defaultContent} title="article title" isSponsored={true} author="John"/>);

        expect(screen.getByText('Sponsored article')).toBeInTheDocument()
    })

    it('should not render sponsored info', () => {
        render(<Article content={defaultContent} title="article title" isSponsored={false} author="John"/>);

        expect(screen.queryByText('Sponsored article')).not.toBeInTheDocument()
    })

    it('should render content as string correctly', () => {
        render(<Article content="abc" title="article title" isSponsored={false} author="John"/>);

        expect(screen.getByText('abc')).toBeInTheDocument()
    })

    it('should render content as parsed html correctly', () => {
        render(<Article content={defaultContent} title="article title" isSponsored={false} author="John"/>);

        const link = screen.getByText('Google link')
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'www.google.com')
    });

    it('should show author after button click', () => {
        render(<Article content={defaultContent} title="article title" isSponsored={false} author="John"/>);

        const button = screen.getByRole('button')
        expect(button).toHaveTextContent('Show author');

        fireEvent.click(button)

        expect(screen.getByText('Author: John')).toBeInTheDocument()
    })
})