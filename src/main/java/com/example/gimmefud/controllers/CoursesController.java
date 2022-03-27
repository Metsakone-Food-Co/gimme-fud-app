package com.example.gimmefud.controllers;

import com.example.gimmefud.CoursesService;
import com.example.gimmefud.data.CoursesRepository;
import com.example.gimmefud.data.Courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class CoursesController {

    @Autowired
    CoursesRepository coursesrepo;

    @Autowired
    CoursesService coursesService;

    @GetMapping("/courses")
    public List<Courses> getAllCourses(){
        return coursesService.GetAllCourses() ;
    }

    @GetMapping("/courses/{id}")
    public Courses getSingleCourse(@PathVariable String courseName){return coursesrepo.findById(courseName).get();}

    @PostMapping("/courses")
    public Courses saveCourseDetails(@RequestBody Courses course) {
        return  coursesrepo.save(course);
    }

    @PutMapping("/courses")
    public Courses updateCourseDetails(@RequestBody Courses course) {
        return   coursesrepo.save(course);
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<HttpStatus> deleteCourseById(@PathVariable String courseName){
        coursesrepo.deleteById(courseName);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}