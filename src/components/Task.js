import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
    render() {
        const {task} = this.props; 
        return <div style={this.taskCompleted()}>
             {task.title} -
             {task.description} -
             {task.id} -
             {task.done}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                x
            </button>
        </div>
    }

    taskCompleted() {
        return {
            fontSize:'20px',
            color: this.props.task.done ? '#8080805c' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background: '#8080805c',
    border: 'none',
    borderRadius: '50%',
    padding: '10px 15px',
    cursor: 'pointer',
}

export default Task;