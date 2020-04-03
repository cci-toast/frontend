import React, { Component } from 'react';
import ToastButtonComponent from '../../ToastButtonComponent'
import Center from 'react-center';
import InputComponent from '../../InputComponent'
import ToastSelectComponent from '../../ToastSelectComponent'

class LeisureGroup extends Component {

    state = {
        count: 0,
        data: []
    }

    handleChange = (key, idx) => event => {
        var copy = this.state.data;
        copy[idx][key] = event.target.value;
        this.setState({ data: copy });
    };


    duplicateInput = (event) => {
        event.preventDefault();
        this.setState({
            data: [...this.state.data, { insurancetype: '', insuranceamount: '' }]
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.state.data.map((data, idx) => (

                        <div className='row' key={idx}>
                            <div className='column'>
                                <ToastSelectComponent
                                    options='leisureOptions'
                                    label='Leisure Type'
                                    name='leisuretype'
                                    list='leisuretype'
                                    id='leisuretype'
                                    placeholder='Type in your leisure type'
                                    value={data.leisuretype}
                                    onChange={this.handleChange('leisuretype', idx)}
                                />
                            </div>

                            <div className='column'>
                                <InputComponent
                                    type='number'
                                    label='Leisure Amount'
                                    name='leisureamount'
                                    placeholder='Type in your amount spent on leisure items'
                                    min={0.0}
                                    step={0.01}
                                    iconName='dollarsign'
                                    iconWidth={20}
                                    iconHeight={20}
                                    value={data.leisureamount}
                                    onChange={this.handleChange('leisureamount', idx)}
                                />
                            </div>
                        </div>
                    ))}

                    <Center>
                        <ToastButtonComponent handleClick={this.duplicateInput} tertiary label={this.props.label} />
                    </Center>
                    <hr />
                </div>
            </React.Fragment>
        );
    }
}


export default LeisureGroup;
