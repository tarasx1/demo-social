let BoilingVerdict =(props) =>{
    if (props.celsius >= 100) {
        return <p>Water hot</p>
    }
    return <p>Water cold</p>
}

const scaleNames = {
    c: 'Celsii',
    f: 'Farangeith'
}

class TemperatureInput extends React.Component {
    constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {temperature: ''}
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }
    render () {
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Check temperature in C {scaleNames[scale]}</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}/>
                   </fieldset>
        )
    }
}

class Calculator extends React.Component {
    
    constructor(props) {
        super(props)
        this.handleCelsiusChange=
        this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange= 
        this.handleFahrenheitChange.bind(this)
        this.state = {temperature: '', scale: 'c'}
    } 
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature})
    }
    
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature})
    }
    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ?
        tryConvert(temperature, toCelsius) : temperature
        const fahrenheit = scale === 'c' ?
        tryConvert(temperature, toFahrenheit) : temperature
        return (
            <div>
            <TemperatureInput 
            scale='c'
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
            <TemperatureInput 
            scale='f'
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
            <BoilingVerdict 
            celsius={parselFloat(celsius) } />
            </div>
        )
    }
}

let toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9
}


let toFahrenheit = (celsius) => {
    return (celsius * 9 / 5 ) +32
}

let tryConvert = (temperature, convert) => {
    const input =  parseFloat(temperature)
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output* 1000) / 1000
    return rounded.toString()
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)