import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <Link key={service.id} to={`/services/${service.id}`}>
          <ServiceCard {...service} />
        </Link>
      ))}
    </div>
  );
}