Vue.createApp({
    data: () => ({
        selCity: 'city1',
        selDep: '',
        selEmpl: '',
        selTeam: 'team1',
        selChange: 'change1',
        cities: {
            'city1': 'Taraz',
            'city2': 'Almaty',
            'city3': 'Karaganda'
        },
        departments: {
            'city1': [
                { val: 'dep1', text: 'Цех 1' },
                { val: 'dep2', text: 'Цех 2' }
            ],
            'city2': [
                { val: 'dep3', text: 'Цех 3' },
                { val: 'dep4', text: 'Цех 4' }
            ],
            'city3': [
                { val: 'dep5', text: 'Цех 5' },
                { val: 'dep6', text: 'Цех 6' }
            ]
        },
        employees: {
            'dep1': [
                { val: 'empl1', text: 'Сотрудник 1' },
                { val: 'empl2', text: 'Сотрудник 2' }
            ],
            'dep2': [
                { val: 'empl3', text: 'Сотрудник 3' },
                { val: 'empl4', text: 'Сотрудник 4' }
            ],
            'dep3': [
                { val: 'empl5', text: 'Сотрудник 5' },
                { val: 'empl6', text: 'Сотрудник 6' }
            ],
            'dep4': [
                { val: 'empl7', text: 'Сотрудник 7' },
                { val: 'empl8', text: 'Сотрудник 8' }
            ],
            'dep5': [
                { val: 'empl9', text: 'Сотрудник 9' },
                { val: 'empl10', text: 'Сотрудник 10' }
            ],
            'dep6': [
                { val: 'empl11', text: 'Сотрудник 11' },
                { val: 'empl12', text: 'Сотрудник 12' }
            ]
        }
    }),
    methods: {
        updateDepartments() {
            this.selDep = '';
        },
        updateEmployees() {
            this.selEmpl = '';
        },
        saveData() {
            try {
                const dataToSave = {
                    city: this.selCity,
                    department: this.selDep,
                    employee: this.selEmpl,
                    team: this.selTeam,
                    change: this.selChange
                };
                const jsonData = JSON.stringify(dataToSave);
                document.cookie = 'formData=' + jsonData;

                alert('Данные сохранены успешно!');
            } catch (error) {
                console.error('Произошла ошибка при сохранении данных:', error);
                alert('Произошла ошибка при сохранении данных. Пожалуйста, проверьте консоль для получения дополнительной информации.');
            }
        }
    }
}).mount('#app');
