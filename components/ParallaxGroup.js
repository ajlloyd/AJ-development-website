import React from 'react'




const ParallaxGroup = ({id, layer1, layer2, baseLayerImg, topLayerText, topLayerSubText, PageType}) => {
    return (
        <React.Fragment>
            
            <div className="parallax-group" id={id}>
                <div className={"parallax-layer" + " " + layer1}>
                    {/*<img className="base-img" src={baseLayerImg}/>*/}
                    <div className='text-and-cursor'>
                        <div class="typewriter">
                            <h1>Your new project awaits.</h1>
                        </div>
                    </div>
                    
                </div>
                
                <div class={"parallax-layer" + " " + layer2}>
                    <h1 className={"top-text" + "-" + PageType}>{topLayerText}</h1>
                    <h4 className={"top-text" + "-sub-" + PageType}>{topLayerSubText}</h4>
                </div> 
            </div>
        </React.Fragment>
    )
}

export default ParallaxGroup
