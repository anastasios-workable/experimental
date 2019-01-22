export default {
  type: 'record',
  name: 'JobWithDepartment',
  fields: [
    {
      name: 'account_id',
      type: ['null', 'int'],
      default: null
    },
    {
      name: 'title',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'job_id',
      type: ['null', 'int'],
      default: null
    },
    {
      name: 'code',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'description',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'state',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'created_at',
      type: [
        'null',
        {
          type: 'long',
          'connect.version': 1,
          'connect.name': 'org.apache.kafka.connect.data.Timestamp',
          logicalType: 'timestamp-millis'
        }
      ],
      default: null
    },
    {
      name: 'updated_at',
      type: [
        'null',
        {
          type: 'long',
          'connect.version': 1,
          'connect.name': 'org.apache.kafka.connect.data.Timestamp',
          logicalType: 'timestamp-millis'
        }
      ],
      default: null
    },
    {
      name: 'shortcode',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'published_on',
      type: [
        'null',
        {
          type: 'int',
          'connect.version': 1,
          'connect.name': 'org.apache.kafka.connect.data.Date',
          logicalType: 'date'
        }
      ],
      default: null
    },
    {
      name: 'country_code',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'state_code',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'city',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'requirement_summary',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'benefit_summary',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'telecommuting',
      type: ['null', 'boolean'],
      default: null
    },
    {
      name: 'advertise_country_code',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'advertise_state_code',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'advertise_city',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'zip_code',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'employment_type',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'industry',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'experience',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'salary_currency',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'function',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'education',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'salary_from',
      type: ['null', 'int'],
      default: null
    },
    {
      name: 'salary_to',
      type: ['null', 'int'],
      default: null
    },
    {
      name: 'approval_status',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'advertise_zip_code',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'advertise_elsewhere',
      type: ['null', 'boolean'],
      default: null
    },
    {
      name: 'visible',
      type: ['null', 'boolean'],
      default: null
    },
    {
      name: 'frodo_status',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'access_level',
      type: 'int'
    },
    {
      name: 'subregion',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'advertise_subregion',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'coords',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'advertise_coords',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'published_from_ip',
      type: ['null', 'string'],
      default: null
    },
    {
      name: 'staffing',
      type: ['null', 'boolean'],
      default: null
    },
    {
      name: 'department_name',
      type: ['null', 'string'],
      default: null
    }
  ]
};
