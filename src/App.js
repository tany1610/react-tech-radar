import React, { useEffect } from 'react';

import Radar from "./components/Radar/Radar";
import { useAppContext } from './app-context';

import './App.scss';

function App() {
    const { updateState, state } = useAppContext();

    const setup = {
        rings: ['Adopt', 'Trial', 'Assess', 'Hold'],
        quadrants: ['Tools', 'Techniques', 'Platforms', 'Languages'],
        data: [
            { label: 1, name: 'D3', quadrant: 'Tools', ring: 'Assess' },
            { label: 2, name: 'React', quadrant: 'Tools', ring: 'Adopt' },
            { label: 3, name: 'Webpack', quadrant: 'Tools', ring: 'Adopt' },
            { label: 4, name: 'Storybook', quadrant: 'Tools', ring: 'Trial' },
            { label: 5, name: 'ESLint', quadrant: 'Tools', ring: 'Adopt' },
            { label: 6, name: 'Jest', quadrant: 'Tools', ring: 'Adopt' },
            { label: 7, name: 'TDD', quadrant: 'Techniques', ring: 'Trial' },
            { label: 8, name: 'BEM', quadrant: 'Techniques', ring: 'Hold' },
            { label: 9, name: 'Pair Programming', quadrant: 'Techniques', ring: 'Assess' },
            { label: 10, name: 'CI/CD', quadrant: 'Techniques', ring: 'Adopt' },
            { label: 11, name: 'Agile', quadrant: 'Techniques', ring: 'Adopt' },
            { label: 12, name: 'Firebase', quadrant: 'Platforms', ring: 'Adopt' },
            { label: 13, name: 'AWS Lambda', quadrant: 'Platforms', ring: 'Trial' },
            { label: 14, name: 'Kubernetes', quadrant: 'Platforms', ring: 'Assess' },
            { label: 15, name: 'Heroku', quadrant: 'Platforms', ring: 'Hold' },
            { label: 16, name: 'GraphQL', quadrant: 'Platforms', ring: 'Trial' },
            { label: 17, name: 'JavaScript', quadrant: 'Languages', ring: 'Adopt' },
            { label: 18, name: 'TypeScript', quadrant: 'Languages', ring: 'Adopt' },
            { label: 19, name: 'Python', quadrant: 'Languages', ring: 'Adopt' },
            { label: 20, name: 'Go', quadrant: 'Languages', ring: 'Trial' },
            { label: 21, name: 'Ruby', quadrant: 'Languages', ring: 'Hold' },
            { label: 22, name: 'Rust', quadrant: 'Languages', ring: 'Assess' }
        ]
    };

    useEffect(() => {
        updateState({ quadrants: setup.quadrants, data: setup.data });
    }, []);

    const filterLegendItemsByQuadrant = (quadrantName) => {
        return state.data?.filter(x => x.quadrant === quadrantName);
    };

    return (
        <div className="app-wrapper">
            <div className="app-header">
                <h1>Exadel TechRadar</h1>
                <button className="upload-btn" onClick={() => alert("TODO!")}>Upload Config</button>
            </div>
            <div className="radar-wrapper">
                <p className="radar-quadrant-text">{state.quadrants && state.quadrants[0]}</p>
                <p className="radar-quadrant-text">{state.quadrants && state.quadrants[1]}</p>
                <p className="radar-quadrant-text">{state.quadrants && state.quadrants[2]}</p>
                <p className="radar-quadrant-text">{state.quadrants && state.quadrants[3]}</p>
                <Radar {...setup} />
            </div>
            <div className="app-legend">
                <h2 className="app-legend-header">Legend</h2>
                <div className="app-legend-content">
                    {state.quadrants?.map(quadrant => (
                        <div>
                            <h3>{quadrant}</h3>
                            <div>
                                {filterLegendItemsByQuadrant(quadrant).map(legendItem => (
                                    <p>{legendItem.label}. {legendItem.name}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
