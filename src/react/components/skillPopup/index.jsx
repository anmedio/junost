import React from 'react';

const SkillPopup = (d) => {
	const { data } = d;
	let links = null;
	if (data.links) {
		links = data.links.map(l => {
			return (
				<li key={`${data.tag}_${l.name}`}>
					<a className="tag" href={l.url} target="_blank">{l.name}</a>
				</li>
			)
		});
		links = (
			<React.Fragment>
				<h4>Ссылки на материалы</h4>
	  		<ul>
	  			{links}
	  		</ul>
			</React.Fragment>
		)
	}
  return (
  	<React.Fragment>
  		<button title="Close (Esc)" type="button" className="mfp-close">×</button>
  		<h2>{data.name ? data.name : data.tag}</h2>
  		<p>{data.text ? data.text : null}</p>
  		{links}
  	</React.Fragment>
  );
};

export default SkillPopup;
