import React from 'react';
import Collapsible from '../../containers/Collapsible/Collapsible';
import DatabaseText from '../../containers/DatabaseText/DatabaseText';
import CHARCLASSES from '../../data/charclasses';
import CHARPERKS from '../../data/charperks';

function generateLevel(xp) {
    let level;
    if (xp < 0 || !Number.isInteger(xp)) {
        level = 'Error: XP is not a positive integer';
    } else if (xp < 45) {
        level = 1;
    } else if (xp < 95) {
        level = 2;
    } else if (xp < 150) {
        level = 3;
    } else if (xp < 210) {
        level = 4;
    } else if (xp < 275) {
        level = 5;
    } else if (xp < 345) {
        level = 6;
    } else if (xp < 420) {
        level = 7;
    } else if (xp < 500) {
        level = 8;
    } else if (xp >= 500) {
        level = 9;
    } else {
        level = 0;
    }

    return level;
}

function generatePerks(classType, perkStr) {
    const perkList = [];
    const perkArr = CHARPERKS.find(item => item.code === classType).perks;
    for (let i = 0; i < 15; i++) {
        if (perkStr[i] === '1') {
            if (typeof(perkArr[i]) === 'number') {
                const val = perkArr[i];
                perkList.push(<li key={i}>{perkArr[i - val]}</li>)
            } else {
                perkList.push(<li key={i}>{perkArr[i]}</li>)
            }
        }
    }
    return perkList;
}

function generateGoalChecks(char) {
    const goalsList = [];
    for (let i = 1; i < 7; i++) {
        const currGoal = `goals_${i}`;
        let result = '√:';
        for (let i = 1; i < 4; i++) {
            if (i <= char[currGoal]) {
                result += ' ☑'
            } else {
                result += ' ☐'
            }
        }
        goalsList.push(<li key={i}>{result}</li>);
    }
    return goalsList;
}

function RenderChar(props) {
    const char = props.children;
    const charClassName = CHARCLASSES.find(item => item.code === char.character_class).name;
    const level = generateLevel(char.xp);
    const perkList = generatePerks(char.character_class, char.perks);
    const goalsList = generateGoalChecks(char);

    return (
        <Collapsible title={`${charClassName}: ${char.character_name}`}>
            <ul>
                <li>Name: {char.character_name}</li>
                <li>XP: {char.xp}</li>
                <li>Level: {level}</li>
                <li>Gold Notes: <DatabaseText>{char.gold_notes}</DatabaseText></li>
                <li>Items: <DatabaseText>{char.items_notes}</DatabaseText></li>
                <li>General Notes: <DatabaseText>{char.character_notes}</DatabaseText></li>
                <li>Perks:
                    <ul>
                        {perkList}
                    </ul>
                </li>
                <li>Battle Goals:
                    <ul>
                        {goalsList}
                    </ul>
                </li>
            </ul>
        </Collapsible>
    );
}

export default RenderChar;