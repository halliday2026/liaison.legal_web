-- Demo request submissions from the /firms page
create table if not exists demo_requests (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  first_name  text not null,
  last_name   text not null,
  email       text not null,
  firm_name   text not null,
  phone       text,
  message     text
);

-- Only the service role can read/write (edge function uses service role key)
alter table demo_requests enable row level security;
