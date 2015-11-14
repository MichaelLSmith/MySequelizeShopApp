'use strict';
module.exports = {
    up:function(migration, DataTypes,done) {
        migration.addColumn('Users', 'authToken', DataTypes.STRING);
        done();
    },

    down:function(migration, DataTypes, done) {
        migration.removeColumn('Users', 'authToken');
        done();
    }
}