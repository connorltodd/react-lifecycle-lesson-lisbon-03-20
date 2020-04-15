import React from 'react';



class Logger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({ date: new Date().toLocaleString() })
        }, 1000)
        console.log('Interval initiated')
        console.log(this.timerID)
    }

    componentDidUpdate(prevState) {
        if (this.state.date !== prevState.date) {
            console.log('New Change')
        }
    }

    componentWillUnmount() {
        console.log('Component unmounted')
        clearInterval(this.timerID)
    }

    render() {
        return <div>{this.state.date}</div>
    }
}

export default Logger;