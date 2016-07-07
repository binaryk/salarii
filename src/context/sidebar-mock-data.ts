let defaultSettings = {
    sidebar: {
        collapsed: false,
        categories: [
            "configuration_category",
            // "employees_category",
            // "applicants_category",
            // "jobs_category",
            // "recruitment_category",
            // "employees_appraisal_category",
            // "companies_category",
            // "training_category",
            // "induction_category",
            // "organisation_category",
            // "charts_category",
            // "queries_category",
            // "attendance_category",
            // "portal_category"
        ],
        categoryDefinitions: {
            "configuration_category": {
                text: "General Configuration",
                icon: "speedometer",
                items: [
                    "general_configuration"//,
                    // "general_types",
                    // "general_position",
                    // "general_currencies",
                    // "general_companies_offer",
                    // "general_application",
                    // "general_audit",
                    // "general_warnings",
                    // "general_user_template",
                    // "general_portal",
                    // "general_workflow",
                    // "general_reports",
                ],
                active: false
            },
            "employees_category": {
                text: "Employees",
                active: false
            },
            "applicants_category": {
                text: "Applicants",
                active: false
            },
            "jobs_category": {
                text: "Jobs",
                active: false
            },
            "recruitment_category": {
                text: "Recruitment",
                active: false
            },
            "employees_appraisal_category": {
                text: "Employees appraisal",
                active: false
            },
            "companies_category": {
                text: "Companies",
                active: false
            },
            "training_category": {
                text: "Training",
                active: false
            },
            "induction_category": {
                text: "Induction",
                active: false
            },
            "organisation_category": {
                text: "Organisation",
                active: false
            },
            "charts_category": {
                text: "Charts",
                active: false
            },
            "queries_category": {
                text: "Queries",
                active: false
            },
            "attendance_category": {
                text: "Attendance",
                active: false
            },
            "portal_category": {
                text: "Portal",
                active: false
            }
        },
        itemDefinitions: {
            "general_configuration": {
                text: "Configuration",
                link: "/general",
                active: false
            },
            "general_types": {
                text: "Types",
                link: "/general/types",
                active: false
            },
            "general_position": {
                text: "Position",
                link: "/general/position",
                active: false
            },
            "general_currencies": {
                text: "Currencies",
                link: "/general/currencies",
                active: false
            },
            "general_companies_offer": {
                text: "Companies offer",
                link: "/general/currencies",
                active: false
            },
            "general_application": {
                text: "Application",
                link: "/general/currencies",
                active: false
            },
            "general_audit": {
                text: "Audit",
                link: "/general/currencies",
                active: false
            },
            "general_warnings": {
                text: "Warnings",
                link: "/general/warnings",
                active: false
            },
            "general_user_template": {
                text: "User Template",
                link: "/general/user-template",
                active: false
            },
            "general_portal": {
                text: "Portal",
                link: "/general/portal",
                active: false
            },
            "general_workflow": {
                text: "Workflow",
                link: "/general/workflow",
                active: false
            },
            "general_reports": {
                text: "Reports",
                link: "/general/reports",
                active: false
            }
        }
    },
    page: 'default',
    pages: {
        'default': {

        }
    },
    userInfo : {
        name : "Ancuta A. Vasilescu",
        role : 'ADMINISTRATOR',
        img  : '/assets/img/avatar.jpg'
    }
};

function sidebar() {
    return defaultSettings['sidebar'];
}


function itemDefinitions() {
    return sidebar()['itemDefinitions'];
}

function categoryDefinitions() {
    return sidebar()['categoryDefinitions'];
}

function categories(): Array<string> {
    return sidebar()['categories'];
}

function recordItem(item: SidebarItem) {
    let itemDefs = itemDefinitions();
    itemDefs[item.id] = item;
}
function prependCategory(category: SidebarCategory) {
    categoryDefinitions()[category.id] = category;
    categories().unshift(category.id);
}

const sampleComponents = {
    id: 'sample-components',
    text: 'Components',
    link: '/samples/basic-components',
    active: false
};

const kendo = {
    id: 'kendo',
    text: 'Kendo Components',
    link: '/samples/kendo',
    active: false
};

const validation ={
    id: 'validation',
    text: 'Validation',
    link: '/samples/validation',
    active: true
};

const consumeEndpoint = {
    id: 'consume-endpoint',
    text: 'Consume endpoint',
    link: '/samples/consume-endpoint',
    active: false
};

const startPage = {
    id: 'start-page',
    text: 'CRUD demo ',
    link: '/samples/start-page',
    active: false
};

recordItem(startPage);
recordItem(sampleComponents);
recordItem(kendo);
recordItem(validation);
recordItem(consumeEndpoint);

prependCategory({
    id: 'sample',
    icon: 'present',
    link: '/samples/kendo',
    text: 'Samples',
    items: [
        startPage.id,
        sampleComponents.id,
        kendo.id,
        validation.id,
        consumeEndpoint.id
    ],
    active: false
});

export default defaultSettings;
