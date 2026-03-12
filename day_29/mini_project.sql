CREATE TABLE `users` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum COMMENT 'instructor, student',
  `is_active` bool DEFAULT false,
  `created_at` timestamp
);

CREATE TABLE `courses` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_user` integer NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `price` int,
  `quota` int,
  `created_at` timestamp
);

CREATE TABLE `enrollments` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `user_id` integer NOT NULL,
  `course_id` integer NOT NULL,
  `enrolled_at` timestamp,
  `status` enum COMMENT 'active, completed, dropped'
);

CREATE TABLE `modules` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `course_id` integer NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `order_number` int,
  `created_at` timestamp
);

CREATE TABLE `lessons` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `module_id` integer NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text,
  `video_url` varchar(255),
  `order_number` int,
  `created_at` timestamp
);

CREATE TABLE `assignments` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `course_id` integer NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `due_date` timestamp,
  `created_at` timestamp
);

CREATE TABLE `submissions` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `assignment_id` integer NOT NULL,
  `user_id` integer NOT NULL,
  `file_url` varchar(255),
  `grade` int,
  `submitted_at` timestamp
);

ALTER TABLE `courses` ADD FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

ALTER TABLE `enrollments` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `enrollments` ADD FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`);

ALTER TABLE `modules` ADD FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`);

ALTER TABLE `lessons` ADD FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`);

ALTER TABLE `assignments` ADD FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`);

ALTER TABLE `submissions` ADD FOREIGN KEY (`assignment_id`) REFERENCES `assignments` (`id`);

ALTER TABLE `submissions` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
