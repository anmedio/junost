import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

// Components
import SkillPopup from '~/components/skillPopup';
import SoonPopup from '~/components/soonPopup';
import OnboardingPopup from '~/components/onboardingPopup';

const githubUrl = 'https://github.com/anmedio/grades';

class Grades extends Component {
  static showOnboarding() {
    $.magnificPopup.open({
      items: {
        src: '#popup',
        type: 'inline',
      },
      removalDelay: 250,
      callbacks: {
        beforeOpen() {
          this.st.mainClass = 'mfp-anim';
        },
        open() {
          render(<OnboardingPopup />, $('#popup')[0]);
        },
        close() {
          render(<div />, $('#popup')[0]);
        },
      },
    });
  }

  static openSoon() {
    $.magnificPopup.open({
      items: {
        src: '#popup',
        type: 'inline',
      },
      removalDelay: 250,
      callbacks: {
        beforeOpen() {
          this.st.mainClass = 'mfp-anim';
        },
        open() {
          render(<SoonPopup />, $('#popup')[0]);
        },
        close() {
          render(<div />, $('#popup')[0]);
        },
      },
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      opened: [],
    };
  }

  componentDidMount() {
    if (!localStorage.getItem('CV'))
      localStorage.setItem('CV', JSON.stringify({ items: [] }));

    if (localStorage.getItem('onboarding') !== 'true') Grades.showOnboarding();

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
            margin: 20,
          },
          1024: {
            items: 2,
            margin: 30,
          },
          1440: {
            items: 2,
            margin: 35,
          },
        },
      });
  }

  toggleOpened(name) {
    const { opened } = this.state;
    const findName = opened.indexOf(name);
    if (findName === -1) opened.push(name);
    if (findName >= 0) opened.splice(findName, 1);

    this.setState({ opened });
  }

  openSkill(skill) {
    const parent = this;
    $.magnificPopup.open({
      items: {
        src: '#popup',
        type: 'inline',
      },
      removalDelay: 250,
      callbacks: {
        beforeOpen() {
          this.st.mainClass = 'mfp-anim';
        },
        open() {
          render(
            <SkillPopup data={skill} onChange={() => parent.forceUpdate()} />,
            $('#popup')[0],
          );
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
      if (row.soon) classes.push('is-soon');

      const levels = row.levels.map(level => {
        // If empty - show "soon"
        if (!level.skills.length) {
          return (
            <div key={`${row.name}_${level.name}`} className="grade">
              <h4 className="grade__title title title--grey">{level.name}</h4>
              <div className="grade__block">
                <button
                  type="button"
                  className="grade__item grade__item--soon"
                  onClick={() => Grades.openSoon()}
                  key={`${row.name}_${level.name}_soon`}
                >
                  Скоро
                </button>
              </div>
            </div>
          );
        }

        const CV = JSON.parse(localStorage.getItem('CV'));
        // let counterKnownSkills = 0;
        const skills = level.skills.map(skill => {
          const skillClasses = ['grade__item'];
          if (CV && CV.items.includes(skill.name)) {
            skillClasses.push('grade__item--active');
            // counterKnownSkills++;
          }

          return (
            <button
              type="button"
              className={skillClasses.join(' ')}
              onClick={() => this.openSkill(skill)}
              key={`${row.name}_${level.name}_${skill.tag}`}
            >
              {skill.tag}
            </button>
          );
        });

        // Show percentage
        const percentage = null;
        // For the future (really?)
        // if (counterKnownSkills > 0) {
        //   percentage = (
        //   <sup>{parseInt((counterKnownSkills / skills.length) * 100)}%</sup>
        //   );
        // }

        return (
          <div key={`${row.name}_${level.name}`} className="grade">
            <h4 className="grade__title title title--grey">
              {level.name}
              {percentage}
            </h4>
            <div className="grade__block">{skills}</div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={githubUrl}
              className="grade__btn btn"
            >
              Добавить
            </a>
          </div>
        );
      });

      const progressBarStyles = {
        position: 'absolute',
        top: '-20px',
        left: '13px',
        height: '10px',
        width: '100px',
        borderRadius: '50px',
        border: '1px solid #333',
      };

      const fillerStyles = {
        background: 'black',
        height: '100%',
        width: '75%',
        borderRadius: 'inherit',
        transition: 'width .2s ease-in',
      };

      const Filler = () => {
        return <div style={fillerStyles} />;
      };

      const ProgressBar = () => {
        return (
          <div style={progressBarStyles}>
            <Filler />
          </div>
        );
      };

      return (
        <section key={row.name} className={classes.join(' ')}>
          <div className="container grade-section__wrap">
            <div
              style={{
                zIndex: row.name === 'Python' || row.name === 'Java' ? 9 : 0,
              }}
            >
              <ProgressBar />
            </div>

            <button
              type="button"
              className="title grade-section__title"
              onClick={() => this.toggleOpened(row.name)}
            >
              <span></span>
              {row.name}
            </button>
            <div className="grade-section__slider">{levels}</div>
          </div>
        </section>
      );
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

Grades.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Grades;
