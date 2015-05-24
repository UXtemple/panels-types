import React from 'react';

const PROJECTS = [
  {name: 'panels-router'},
  {name: 'panels-store'},
  {name: 'panels-types'},
  {name: 'panels-ui'}
];
class Project extends React.Component {
  render() { return <div>{this.props.name}</div> }
}
Project.propTypes = { name: React.PropTypes.string.isRequired }

class ProjectContainer extends React.Component {
  render() { return <Project {...PROJECTS[this.props.index]}/> }
}
ProjectContainer.propTypes = { index: React.PropTypes.number.isRequired }

class ActionBlock extends React.Component {
  render() { return <div>{this.props.href}</div> }
}
class TitleBlock extends React.Component {
  render() { return <div>{this.props.title}</div> }
}

export default [{
  name: 'Title',
  component: TitleBlock
}, {
  name: 'Action',
  component: ActionBlock
}, {
  name: 'Project',
  component: ProjectContainer
}];
