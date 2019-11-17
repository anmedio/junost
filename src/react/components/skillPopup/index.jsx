import React from 'react';

const SkillPopup = (d) => {
	const { data, onChange } = d;
	const CV = JSON.parse(localStorage.getItem('CV'));
	
	// Links
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

	// Set CV based on LocalStorage
	function setKnow(tag) {
		const newCV = JSON.parse(localStorage.getItem('CV'));
		if (newCV && newCV.items.indexOf(data.name) > -1){
			newCV.items.splice(newCV.items.indexOf(data.name), 1);
		} else {
			newCV.items.push(data.name);
		}
		localStorage.setItem('CV',JSON.stringify(newCV))
		$('.btn-know').toggleClass('btn-know--active');
		onChange();
	}

	const btnClasses = ['btn-know'];
	if (CV && CV.items.includes(data.name))
		btnClasses.push('btn-know--active')
  
  return (
  	<React.Fragment>
  		<button title="Close (Esc)" type="button" className="mfp-close">×</button>
  		<h2>
  			{data.name ? data.name : data.tag} 
  			<button onClick={() => setKnow(data.name)} className={btnClasses.join(' ')}>Я это знаю</button>
  		</h2>
  		<p>{data.text ? data.text : null}</p>
  		{links}
  	</React.Fragment>
  );
};

export default SkillPopup;
