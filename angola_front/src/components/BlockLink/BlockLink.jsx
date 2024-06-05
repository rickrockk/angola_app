import './BlockLink.scss'

export const BlockLink = ({children}) => {
    return (
        <div className='block__link'>
            {children}
            <svg className="block__btn" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" transform="rotate(-90 12 12)" fill="#FFCB00"/>
                <path d="M10.5036 15.4828C10.2252 15.7617 10.2251 16.2133 10.5034 16.4924C10.7826 16.7726 11.2363 16.7727 11.5157 16.4927L15.2949 12.7064C15.6845 12.3161 15.6845 11.6839 15.2949 11.2936L11.5157 7.50726C11.2363 7.22731 10.7826 7.22745 10.5034 7.50757C10.2251 7.78666 10.2252 8.23826 10.5036 8.51725L13.9781 12L10.5036 15.4828Z" fill="black"/>
            </svg>
        </div>
    );
};