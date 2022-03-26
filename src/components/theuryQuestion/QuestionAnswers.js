import React from 'react';

const QuestionAnswers = () => {
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-12'>
                <div class="card w-100 my-4">
                    <div class="card-body">
                        <h5 class="card-title">How react works?</h5>
                        <p class="card-text fw-bold ">
                            React is a open source javascript library that is built for single page Applications. It manage tha web and mobile apps view layer . Not only this but also it can built reusable component that plays an significant part for perfomance.
                            To the perspect of react we can give focus on Dom and Bom . Dom means Document object model and Bom means Browser object model. When we use react and change the state of components that time code is rerendered by Dom. During rerender we get two parameter first one is  what does it print and second is where. 
                            After that , all activity has to repaint by Browser so that it can find changes . Whenever a component's state changes are occured, the changes are also reflected in virtual Dom.
                            Then Virtual dom update the state of component. 
                       </p>
                         
                    
                    </div>
                    </div>

                </div>

                <div className='col-12'>
                <div class="card w-100 my-4">
                    <div class="card-body">
                        <h5 class="card-title">Props vs State</h5>
                        <p class="card-text fw-bold text-align-left">State: </p>
                        <ul>
                            <li>
                                It is considered as local data storae of A component that cannot be accessed from outside of the component.
                            </li>
                            <li>User use State as it is equivalent to local variables.</li>
                            <li>State are Mutable</li>
                            <li>to updata state setState() use</li>
                
                        </ul>
                        <p class="card-text fw-bold">Props: </p>
                        <ul>
                            <li>
                                props pass data from parent to child component. we can build reusable components by props. 
                            </li>
                            <li>props are immutable. </li>
                            <li>props has better perfomance.</li>
                            <li>props read only and can be defaulted</li>
                        </ul>
                    
                    </div>
                    </div>

                </div>

                <div class="card w-100 my-4">
                    <div class="card-body">
                        <h5 class="card-title">How useState() hook work?</h5>
                        <p class="card-text fw-bold ">
                           useState() is a hook that is worked on function components to set state and update the state. In this hook, we can initialize the state as parameter. 
                           and it returns a variable with the current state value . Alongly, it provides the another function to update this value. The value can be any type for instance object, array, boolean
                           , or any number. It is usually use for local component state. Before use this hook we must ensure that useState is imported .
                           useState hook returns an array where the first one is element and the seocnd is function to upate value of state in component. It conatain the update operation. Then after rerender , component ignore the argument of useState hook.
                       </p> 
                         
                    
                    </div>
                    </div>

            </div>
        </div>
    );
};

export default QuestionAnswers;