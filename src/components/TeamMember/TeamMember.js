import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import './TeamMember.css';
import CodelitEmptyAvatar from '../../assets/codelit_empty_avatar.svg';
import TeamMemberForm from './TeamMemberForm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    minWidth: '400px',
    maxHeight: '100vh',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class TeamMember extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    story: PropTypes.string,
    favoriteColor: PropTypes.string
  };

  static defaultProps = {
    photoUrl: CodelitEmptyAvatar,
    story: null,
    favoriteColor: '#3466F2'
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.joinTeam = this.joinTeam.bind(this);
  }

  handleCloseModal () {
    this.setState({
      showModal: false
    })
  }

  joinTeam () {
    this.setState({
      showModal: true
    })
  }

  render() {
    return (
      <div className="container">
        <header>
          <div className="avatar-container">
            <img
              className="avatar"
              src={this.props.photoUrl}
              alt={this.props.name}
            />
          </div>
          <h2 className="title">{this.props.title}</h2>
          <h1 className="name">{this.props.name}</h1>
        </header>
        <div className="body">{this.props.story}</div>
        {
          this.props.id === 'new' && (
            <button className='btn-join' onClick={this.joinTeam}>Join the team!</button>
          )
        }
        <footer style={{ backgroundColor: this.props.favoriteColor }}>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box stat">9.0</div>
            <div className="one-third-flex-box stat bordered">9.0</div>
            <div className="one-third-flex-box stat">9.0</div>
          </div>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box">CANDID</div>
            <div className="one-third-flex-box">LEARNING</div>
            <div className="one-third-flex-box">GRIT</div>
          </div>
        </footer>
        <ReactModal
          style={customStyles}
          onRequestClose={this.handleCloseModal}
          isOpen={this.state.showModal}
          ariaHideApp={false}
        >
          <TeamMemberForm closeModal={this.handleCloseModal} />
        </ReactModal>
      </div>
    );
  }
}

export default TeamMember;
