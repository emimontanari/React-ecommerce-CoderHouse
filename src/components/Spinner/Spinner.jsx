import { css } from '@emotion/react'
import MoonLoader from 'react-spinners/MoonLoader'
import './Spinner.css'

const LoaderSecondary = () => {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: #1A4D2E;
`;

    return (
        <>
            <div className="loaderSecondaryContainerMobile">
                <MoonLoader color='#1A4D2E' css={override} size={150} />
            </div>
            <div className="loaderSecondaryContainer">
                <MoonLoader color='#1A4D2E' css={override} size={150} />
            </div>
        </>
    )
}

export default LoaderSecondary