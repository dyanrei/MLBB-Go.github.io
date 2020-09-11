let enemy;

function Enemy(enemySelect, HP, physicalAttack, magicPower, physicalDef, magicRes, attackSpeed) {
    this.enemySelect = enemySelect;
    this.HP = HP;
    this.physicalAttack = physicalAttack;
    this.magicPower = magicPower;
    this.physicalDef = physicalDef;
    this.magicRes = magicRes;
    this.attackSpeed = attackSpeed;
}