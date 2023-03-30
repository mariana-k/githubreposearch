import React from 'react';
import {
	StyledRepo,
	StyledAvatar,
	StyledAvatarImage,
	StyledAuthor,
	StyledName,
	StyledDescription,
	StyledLanguage,
	StyledRating,
	StyledWatching,
} from './Repo.styles';

const Repo = (props) => {
	const { data } = props;

	return (
		<StyledRepo>
			<StyledAvatar href={data.owner.url}>
				<StyledAvatarImage src={data.owner.avatar_url} alt={data.owner.name} />
			</StyledAvatar>
			<StyledName href={data.url} target="_blank" rel="noreferrer">
				{data.name}
			</StyledName>
			<StyledAuthor href={data.owner.url}>{data.owner.login}</StyledAuthor>
			<StyledLanguage>{data.language}</StyledLanguage>
			<StyledDescription>{data.description}</StyledDescription>
			<StyledRating>
				<svg
					width="29"
					height="30"
					viewBox="0 0 29 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M27.4062 10.228L19.5157 9.40576C19.0182 9.35593 18.5884 9.0071 18.3852 8.48387L15.559 0.934347C15.1068 -0.311449 13.5013 -0.311449 13.0491 0.934347L10.2455 8.48387C10.0646 9.0071 9.61243 9.35593 9.11502 9.40576L1.22426 10.228C0.0485649 10.3526 -0.426237 11.9721 0.455538 12.8442L6.40186 18.5997C6.78623 18.9735 6.94449 19.5216 6.83145 20.0698L5.04529 28.1423C4.77397 29.4132 6.0175 30.4595 7.05754 29.787L13.6369 25.5261C14.0665 25.252 14.5865 25.252 15.0161 25.5261L21.5957 29.787C22.6358 30.4595 23.8793 29.4382 23.6078 28.1423L21.8442 20.0698C21.7312 19.5216 21.8894 18.9735 22.2738 18.5997L28.2201 12.8442C29.0793 11.9721 28.5819 10.3526 27.4062 10.228Z"
						fill="#FFC22B"
					/>
				</svg>
				{data.stargazers_count} stars
			</StyledRating>
			<StyledWatching>
				<svg width="24" height="24" viewBox="0 0 100 100" fill="none">
					<g>
						<path
							d="M50.096,58.555c14.782,0,26.805-12.025,26.805-26.806c0-14.78-12.023-26.805-26.805-26.805
              c-14.78,0-26.804,12.025-26.804,26.805C23.292,46.53,35.316,58.555,50.096,58.555z M50.096,10.928
              c11.481,0,20.823,9.34,20.823,20.821c0,11.481-9.342,20.823-20.823,20.823c-11.48,0-20.82-9.342-20.82-20.823
              C29.276,20.269,38.616,10.928,50.096,10.928z"
							fill="#6E798C"
						/>
						<path
							d="M64.751,64H35.249C18.07,64,4.094,79,4.094,95h5.985c0-13,11.056-25,25.169-25h29.502C78.63,70,89.92,82,89.92,95h5.985
              C95.905,79,81.93,64,64.751,64z"
							fill="#6E798C"
						/>
					</g>
				</svg>
				{data.watchers_count}
				watchers
			</StyledWatching>
		</StyledRepo>
	);
};

export default Repo;
