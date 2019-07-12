import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

const githubUrl = '//anmedio.ru';

// Components
import SkillPopup from '~/components/skillPopup';

class Grades extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      opened: []
    };
  }

  componentDidMount() {
    $('.grade-section__slider')
      .addClass('owl-carousel owl-theme')
      .owlCarousel({
        loop: false,
        items: 1,
        dots: false,
        nav: false,
        margin: 15,
        responsive: {
          768: {
            items: 1,
            margin: 30,
          },
          1024: {
            items: 2,
            margin: 40,
          },
          1440: {
            items: 2,
            margin: 55,
          },
        },
      });
  }

  toggleOpened(name) {
    let { opened } = this.state;
    const findName = opened.indexOf(name);
    if (findName == -1) opened.push(name);
    if (findName >= 0) opened.splice(findName, 1);

    this.setState({ opened });
  }

  openSkill(skill) {
    $.magnificPopup.open({
      items: {
        src: '#popup',
        type: 'inline'
      },
      removalDelay: 250,
      callbacks: {
        beforeOpen() {
          this.st.mainClass = 'mfp-anim';
        },
        open() {
          render(<SkillPopup data={skill} />, $('#popup')[0]);
        },
        close() {
          render(<div />, $('#popup')[0]);
        },
      },
    });
  }

  prepareRows() {
    const { data, opened } = this.state;

    const rows = data.map(row => {

      const classes = ['grade-section'];
      if (opened.indexOf(row.name) >= 0) classes.push('is-open');

      const levels = row.levels.map(level => {
        const skills = level.skills.map(skill => {
          return (
            <button
              type="button"
              className="grade__item"
              onClick={() => this.openSkill(skill)}
              key={`${row.name}_${level.name}_${skill.tag}`}
            >
              {skill.tag}
            </button>
          )
        });

        return (
          <div key={`${row.name}_${level.name}`} className="grade">
            <h4 className="grade__title title title--grey">{level.name}</h4>
            <div className="grade__block">
              {skills}
            </div>
            <a
              target="_blank"
              href={githubUrl}
              className="grade__btn btn"
            >
              Добавить
            </a>
          </div>
        )

      });

      return (
        <section key={row.name} className={classes.join(' ')}>
          <div className="container grade-section__wrap">
            <button
              type="button"
              className="title grade-section__title"
              onClick={() => this.toggleOpened(row.name)}
            >
              <span></span>
              {row.name}
            </button>
            <div className="grade-section__slider">
              {levels}
            </div>
          </div>
        </section>
      )
    });

    return rows;
  }

  render() {
    return (
      <React.Fragment>
        {this.prepareRows()}
        <div className="grade-popup" id="popup" />
      </React.Fragment>
    );
  }
}

export default Grades;
