import React from 'react'

export default class TaskList extends React.Component {
    state = {
        'tasks': [
            {
                id: 1,
                description: 'walk the dog',
                case: 'mid',
                done: false
            },
            {
                id: 2,
                description: 'water plants',
                case:'mid',
                done: false
            },
            {
                id: 3,
                description: 'pay bills',
                case: 'low',
                done: false
            }
        ],
        newTaskName: "",
        taskBeingEdited: 0,
        modifiedTaskName: ""
    }

   




    checkTask = (event) => {
        for(var i=0;i<this.state.tasks.length;i++){
        let currentTask = this.state.tasks.filter(t => t.case === event)[0];
        console.log('case:' + currentTask.case)
        console.log(event)
        let modifiedTask = { ...currentTask };
        console.log(currentTask)
        modifiedTask.done = !currentTask.done;
        console.log(modifiedTask.done)
        let modifiedTasksList = this.state.tasks.map(t => {
            if (modifiedTask.done === true) {
                console.log(t,'t')
                return t;
            } else {
                console.log(modifiedTask,'m')
                return modifiedTask;
            }
        })
        this.setState({
            'tasks': modifiedTasksList
        })
        console.log(this.state.tasks)
    }
    }

    

    displayTask = t => {
        return (
            <li key={t.id}>
                {t.description}
                <input
                    type="checkbox"
                    onChange={() => {
                        this.checkTask(t.case);
                    }}
                />
                
            </li>
        );
    };

   

    // t refers to each category. e.g. t={id:...,description:...,done....}
    render() {
        return (<React.Fragment>
            
            <ul>
                {/* if else statement turnary operator '?',':' */}
            {this.state.tasks.map(t => this.state.taskBeingEdited !== t.id ? this.displayTask(t) : this.displayEditTask(t))}
            </ul>
           
        </React.Fragment>
        )
    }
}