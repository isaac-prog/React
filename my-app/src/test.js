import React from 'react'

export default class TestList extends React.Component {
    state = {
        'tasks': [
            {
                id: 1,
                description: 'walk the dog',
                done: false
            },
            {
                id: 2,
                description: 'water plants',
                done: false
            },
            {
                id: 3,
                description: 'pay bills',
                done: false
            }
        ],
        newTaskName: "",
        modifiedTaskName: ""
    }

    checkTask = (task_id) => {
        let currentTask = this.state.tasks.filter(t => t.id === task_id)[0];
        let modifiedTask = { ...currentTask };
        modifiedTask.done = !currentTask.done;
        let modifiedTasksList = this.state.tasks.map(t => {
            if (t.id !== task_id) {
                console.log("untick")
                return t;
            } else {
                console.log("tick")
                return modifiedTask;
            }
        })
        this.setState({
            'tasks': modifiedTasksList
        })
    }

    displayTask = t => {
        return (
            <li key={t.id}>
                {t.description}
                <input
                    type="checkbox"
                    value={t.description === true}
                    onChange={() => {
                        this.checkTask(t.id);
                    }}
                />
            </li>
        );
    };

    // t refers to each category. e.g. t={id:...,description:...,done....}
    render() {
        return (<React.Fragment>
            <h1>To Do List</h1>
            <ul>
                {/* if else statement turnary operator '?',':' */}
            {this.state.tasks.map(t => this.state.taskBeingEdited !== t.id ? this.displayTask(t) : this.displayEditTask(t))}
            </ul>
        </React.Fragment>
        )
    }
}