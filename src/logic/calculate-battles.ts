import Phase from '@cemderin/battle-calculator';

export default function calculateBattles(attackerIndex: number, defenderIndex: number, factions: Array<any>) {
    console.log(attackerIndex, defenderIndex);
    if(attackerIndex < 0 || defenderIndex < 0) return [];
    if(attackerIndex === null || defenderIndex === null) return [];
    
    let results: Array<any> = [];

    for (let attacker of factions[attackerIndex].models) {
        for (let defender of factions[defenderIndex].models) {
            const phase = new Phase();
            phase.attacker = attacker;
            phase.defender = defender;

            results.push({
                attacker: attacker.name,
                defender: defender.name,
                result: phase.handle()
            });
        }
    }

    return results;
}