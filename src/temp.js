import React from 'react'
import react, {useSate} from 'react'
const testData = [
    {
        "parent" : 'prathyusha',
        "child"  :'pravasti' 
    },

    {
        "parent" : 'srinivasarao',
        "child"  : 'sandhya'
    
    },
    {
        "parent" : 'parvathi',
        "child"  : 'karthik'
    
    },
    {
        "parent" : 'satyanarayana',
        "child"  : 'chanti'
    
    },

]

class ParentList extends React.Component {
    render(){
        return testData.map(parentChild => <MotherChild parentChildData={parentChild} ></MotherChild>)
    }
}

class MotherChild extends React.Component {
    render() {
        const currentParentData = this.props.parentChildData;
        return (
            <div>
                <div>{currentParentData.child}</div>
                <div className="parent"> {currentParentData.parent}</div>
            </div>
        )
    }
}

class Family extends React.Component {
state ={
    parentData :testData 

}


render()
{
  return  <ParentList />
}
}

export default Family;