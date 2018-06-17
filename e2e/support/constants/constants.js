const CONSTANTS = { 
    URL : {
        CARRER_PAGE : 'https://www.epam.com/careers',
        JOB_PAGE : 'https://www.epam.com/careers/job-listings'
    },

    JOB_ID : [],

    COUNTRY : {
        AUSTRALIA : 'Australia',
        BELARUS : 'Belarus',
        BELGIUM : 'Belgium',
        BULGARIA : 'Bulgaria',
        CANADA : 'Canada',
        CHINA : 'China',
        CZECH_REPUBLIC : 'Czech Republic',
        GERMANY : 'Germany',
        HONG_KONG : 'Hong Kong',
        HUNGARY : 'Hungary',
        INDIA : 'India',
        IRELAND : 'Ireland',
        KAZAKHSTAN : 'Kazakhstan',
        MALAYSIA : 'Malaysia',
        MEXICO : 'Mexico',
        NETHERLANDS : 'Netherlands',
        POLAND : 'Poland',
        RUSSIAN_FEDERATION : 'Russian Federation',
        SINGAPORE : 'Singapore',
        SPAIN : 'Spain',
        SWEDEN : 'Sweden',
        SWITZERLAND : 'Switzerland',
        UKRAINE : 'Ukraine',
        UNITED_ARAB_EMIRATES : 'United Arab Emirates',
        UNITED_KINGDOM : 'United Kingdom',
        UNITED_STATES : 'United States' 
    },

    CITY : {
        AUSTRALIA : {
            ALL : 'All cities in Australia',
            SYDNEY : 'Sydney'
        },
        BELARUS : {
            ALL : 'All cities in Belarus',
            BREST : 'Brest',
            GOMEL : 'Gomel',
            GRODNO : 'Grodno',
            MINSK : 'Minsk',
            MOGILEV : 'Mogilev',
            VITEBSK : 'Vitebsk'
        },
        BELGIUM : {
            ALL : 'All cities in Belgium',
            ANTWERP : 'Antwerp'
        },
        BULGARIA : {
            ALL : 'All cities in Bulgaria',
            SOFIA : 'Sofia'
        },
        CANADA : {
            ALL : 'All cities in Canada',
            MISSISSAUGA : 'Mississauga',
            TORONTO : 'Toronto'
        },
        CHINA : {
            ALL : 'All cities in China',
            SHENZHEN : 'Shenzen',
            SUZHOU : 'Suzhou'
        },
        CZECH_REPUBLIC : {
            ALL : 'All cities in Chech Repuplic',
            PRAGUE : 'Prague'
        },
        GERMANY : {
            ALL : 'All cities in Germany',
            FRANKFURT : 'Frankfurt',
            HERZOGENAURACH : 'Herzogenaurach',
            MUNICH : 'Munich',
            NUREMBERG : 'Nuremberg'
        },
        HONG_KONG : {
            ALL : 'All cities in Hong Kong'
        },
        HUNGARY : {
            ALL :  'All Cities in Hungary',
            BUDAPEST : 'Budapest',
            DEBRECEN : 'Debrecen',
            SZEGED : 'Szeged'
        },
        INDIA : {
            ALL : 'All cities in India',
            BANGALORE : 'Bahgalore',
            HYDERABAD : 'Hyderabad',
            PUNE : 'Pune'
        },
        IRELAND : {
            ALL : 'All cities in Ireland',
            DUBLIN :  'Dublin'
        },
        KAZAKHSTAN : {
            ALL : 'All cities in Kazakhstan',
            ALMATY : 'Almaty',
            ASTANA : 'Astana',
            ATYRAU : 'Atyrau',
            KARAGANDA : 'Karaganda'
        },
        MALAYSIA : {
            ALL : 'All cities in Malaysia',
            CYBERJAYA : 'Cyberjaya',
            KUALA_LUMPUR : 'Kuala Lumpur'
        },
        MEXICO : {
            ALL : 'All cities in Mexico',
            GUADALAJARA : 'Guadalajara',
            MEXICO_CITY : 'Mexico City',
            MONTERREY : 'Monterrey'
        },
        NETHERLANDS : {
            ALL : 'All cities in Netherlands',
            AMERSFOORT : 'Amersfoort',
            AMSTERDAM : 'Amsterdam'
        },
        POLAND : {
            ALL : 'All Cities in Poland',
            GDANSK : 'Gdansk',
            KATOWICE : 'Katowice',
            KRAKOW : 'Krakow',
            WARSAW : 'Warsaw',
            WROCLAW : 'Wroclaw'
        },
        RUSSIAN_FEDERATION : {
            ALL : 'All Cities in Russian Federation',
            IZHEVSK : 'Izhevsk',
            MOSCOW : 'Moscow',
            NIZHNY_NOVGOROD : 'Nizhny Novgorod',
            RYAZAN : 'Ryazan',
            SAINT_PETERSBURG : 'Saint-Petersburg',
            SAMARA : 'Samara',
            SARATOV : 'Saratov',
            SERGIEV_POSAD : 'Sergiev Posad',
            TOGLIATTI : 'Togliatti',
            TVER : 'Tver',
            VOLGOGRAD : 'Volgograd',
            VORONEZH :'Voronezh'
        },
        SINGAPORE : {
            ALL : 'All cities in Singapore',
            SINGAPORE : 'Singapure'
        },
        SPAIN : {
            ALL : 'All cities in Spain',
            BARCELONA : 'Barselona',
            MALAGA : 'Malaga'
        },
        SWEDEN : {
            ALL : 'All cities in Sweden',
            GOTHENBURG : 'Gothenburg',
            STOCKHOLM : 'Stockholm'
        },
        SWITZERLAND : {
            ALL : 'All cities in Switzerland',
            BASEL : 'Basel',
            ZURICH : 'Zurich'
        },
        UKRAINE : {
            ALL : 'All cities in Ukraine',
            DNIPRO : 'Dnipro',
            KHARKIV : 'Kharkiv',
            KYIV : 'Kyiv',
            LVIV : 'Lviv',
            VINNYTSYA : 'Vinnytsya'
        },
        UNITED_ARAB_EMIRATES : {
            ALL : 'All cities in United Arab Emirates',
            DUBAI : 'Dubai'
        },
        UNITED_KINGDOM : {
            ALL : 'All cities in United Kingdom',
            LONDON : 'London',
            MANCHESTER : 'Manchester'
        },
        UNITED_STATES : {
            ALL : 'All Cities in United States',
            ATLANTA_GA : 'Atlanta, GA',
            AUSTIN_TX :'Austin, TX',
            BLOOMFIELD_CT : 'Bloomfield, CT',
            BOSTON_MA : 'Boston, MA',
            BRIDGEPORT_CT : 'Bridgeport, CT',
            BRIDGEWATER_NJ : 'Bridgewater, NJ',
            CHARLOTTE_NC : 'Charlotte, NC',
            CHICAGO_IL : 'Chicago, IL',
            CONSHOHOCKEN_PA : 'Conshohocken, PA',
            CUPERTINO_CA : 'Cupertino, CA',
            DALLAS_TX : 'Dallas, TX',
            GRAND_RAPIDS_MI : 'Grand Rapids, MI',
            HARTFORD_CT : 'Hartford, CT',
            HOBOKEN_NJ : 'Hoboken, NJ',
            HOUSTON_TX : 'Houston, TX',
            IRVINE_CA : 'Irvine, CA',
            LOS_ANGELES_CA : 'Los Angeles, CA',
            MALVERN_PA : 'Malvern, PA',
            MCLEAN_VA : 'McLean, VA',
            MEDIA_PA : 'Media, PA',
            MOUNTAIN_VIEW_CA : 'Mountain View, CA',
            NEWARK_NJ : 'Newark, NJ',
            NEWTOWN_PA : 'Newtown, PA',
            NEW_YORK_NY : 'New York, NY',
            O_FALLON_MO : 'O\'Fallon, MO',
            PALO_ALTO_CA : 'Palo Alto, CA',
            PHILADELPHIA_PA : 'Philadelphia, PA',
            PITTSBURGH_PA : 'Pittsburgh, PA',
            SAN_FRANCISCO_CA : 'San Francisco, CA',
            SAN_JOSE_CA : 'San Jose, CA',
            SAN_RAMON_CA : 'San Ramon, CA',
            SANTA_MONICA_CA : 'Santa Monica, CA',
            SEATTLE_WA : 'Seattle, WA',
            STAMFORD_CT : 'Stamford, CT',
            SUNNYVALE_CA : 'Sunnyvale, CA',
            WASHINGTO_D_C : 'Washington D.C.',
            WEEHAWKEN_NJ : 'Weehawken, NJ',
            WESTPORT_CT : 'Westport, CT',
            WINDSOR_CT : 'Windsor, CT'
        }
    },

    SKILL : {
        ADMINISTRATIVE_POSITIONS : 'Administrative positions',
        CLOUD_AND_DEVOPS : 'Cloud & DevOps',
        CONSULTING_AND_BUSINESS_ANALYSIS : 'Consulting & Business Analysis',
        DATA_ANALYSIS_AND_DIGITAL_STRATEGY : 'Data Analysis & Digital Strategy',
        DELIVERY_AND_PROJECT_MANAGEMENT : 'Delivery & Project Management',
        HR_AND_TALENT_ACQUISITION : 'HR & Talent Acquisition',
        MANAGEMENT : 'Management',
        SALES_MARKETING_PR : 'Sales, Marketing & PR',
        SERVICE_MANAGEMENT_AND_COMPLIANCE : 'Service Management and Compliance',
        SOFTWARE_ARCHITECTURE : 'Software Architecture',
        SOFTWARE_ENGINEERING : 'Software Engineering',
        SOFTWARE_TEST_ENGINEERING : 'Software Test Engineering',
        TRAINING_AND_COACHING : 'Training & Coaching',
        USER_EXPERIENCE_AND_DESIGN : 'User Experience & Design',
    }
};

module.exports = CONSTANTS;